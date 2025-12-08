"use server"

import { db } from "@/lib/db"
import { getSession } from "@/lib/auth"
import { revalidatePath } from "next/cache"

interface UpdateAutomationSettingsData {
  messageGenerationMode: "AI_PILOT" | "MANUAL_COPILOT"
}

interface UpdateAutomationSettingsResponse {
  success: boolean
  error?: string
}

export async function updateAutomationSettings(
  data: UpdateAutomationSettingsData
): Promise<UpdateAutomationSettingsResponse> {
  try {
    const session = await getSession()

    if (!session) {
      return {
        success: false,
        error: "Unauthorized",
      }
    }

    if (session.role !== "COMPANY_ADMIN" && session.role !== "SUPER_ADMIN") {
      return {
        success: false,
        error: "Only company admins can update settings",
      }
    }

    // Validate mode
    if (!["AI_PILOT", "MANUAL_COPILOT"].includes(data.messageGenerationMode)) {
      return {
        success: false,
        error: "Invalid message generation mode",
      }
    }

    // Check if company settings exist
    const existingSettings = await db.companySettings.findUnique({
      where: { companyId: session.companyId },
    })

    if (existingSettings) {
      // Update existing settings
      await db.companySettings.update({
        where: { companyId: session.companyId },
        data: {
          messageGenerationMode: data.messageGenerationMode,
        },
      })
    } else {
      // Create new settings
      await db.companySettings.create({
        data: {
          companyId: session.companyId,
          messageGenerationMode: data.messageGenerationMode,
        },
      })
    }

    // Revalidate the settings page
    revalidatePath("/dashboard/admin/settings")

    console.log(`[Settings] Updated automation mode for company ${session.companyId}: ${data.messageGenerationMode}`)

    return {
      success: true,
    }
  } catch (error) {
    console.error("Error updating automation settings:", error)
    return {
      success: false,
      error: "Failed to update settings. Please try again.",
    }
  }
}
