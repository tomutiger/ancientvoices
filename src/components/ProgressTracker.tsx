import React from "react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { Trophy, Mic, Award } from "lucide-react";

interface LanguageStats {
  language: string;
  recordings: number;
  totalGoal: number;
}

interface UserStats {
  totalRecordings: number;
  validatedRecordings: number;
  achievements: number;
}

interface ProgressTrackerProps {
  languageStats?: LanguageStats[];
  userStats?: UserStats;
}

const ProgressTracker = ({
  languageStats = [
    { language: "Latin", recordings: 150, totalGoal: 500 },
    { language: "Ancient Greek", recordings: 75, totalGoal: 300 },
    { language: "Old Norse", recordings: 45, totalGoal: 200 },
  ],
  userStats = {
    totalRecordings: 25,
    validatedRecordings: 15,
    achievements: 3,
  },
}: ProgressTrackerProps) => {
  return (
    <div className="w-[300px] space-y-4 bg-background p-4">
      <Card className="p-4">
        <h2 className="text-lg font-semibold mb-4">Your Contributions</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Mic className="w-4 h-4" />
            <span className="text-sm">Total Recordings:</span>
            <span className="ml-auto font-medium">
              {userStats.totalRecordings}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span className="text-sm">Validated:</span>
            <span className="ml-auto font-medium">
              {userStats.validatedRecordings}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            <span className="text-sm">Achievements:</span>
            <span className="ml-auto font-medium">
              {userStats.achievements}
            </span>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <h2 className="text-lg font-semibold mb-4">Community Progress</h2>
        <div className="space-y-6">
          {languageStats.map((stat, index) => (
            <div key={stat.language} className="space-y-2">
              {index > 0 && <Separator className="my-4" />}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{stat.language}</span>
                <span className="text-sm text-muted-foreground">
                  {stat.recordings}/{stat.totalGoal}
                </span>
              </div>
              <Progress
                value={(stat.recordings / stat.totalGoal) * 100}
                className="h-2"
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ProgressTracker;
