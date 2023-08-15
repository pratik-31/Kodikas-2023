import { NextResponse } from "next/server";
import Team from "@models/team";
import { connectToDatabase } from "@utils/db";

//remove team member by leader
export async function DELETE(request, { params }) {
  try {
    await connectToDatabase();
    const userId = params.id;

    const team = await Team.findOne({ leader: userId });
    // Check if payment is done
    if (team.payment) {
      return NextResponse.json(
        {
          message:
            "You cannot remove the team member after completing the payment",
        },
        { status: 403 }
      );
    }
    const teamDetails = await Team.findByIdAndUpdate(
      team._id,
      { teamMember: null, teamMemberConfirmation: false },
      { new: true }
    ).populate("leader");

    return NextResponse.json({
      success: true,
      message: "Team member removed successfully",
      data: teamDetails,
    });
  } catch (error) {
    console.error("Error removing team member:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}