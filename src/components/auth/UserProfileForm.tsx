import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";

interface UserProfile {
  age: number;
  gender: string;
  native_language: string;
  accent: string;
  speaking_impairments: string;
  recording_environment: string;
}

export default function UserProfileForm() {
  const [profile, setProfile] = useState<UserProfile>({
    age: 0,
    gender: "",
    native_language: "",
    accent: "",
    speaking_impairments: "",
    recording_environment: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("user_profiles").upsert([
      {
        user_id: (await supabase.auth.getUser()).data.user?.id,
        ...profile,
      },
    ]);

    setLoading(false);
  };

  return (
    <Card className="w-[600px] bg-background">
      <CardHeader>
        <CardTitle>Complete Your Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input
                type="number"
                placeholder="Age"
                value={profile.age}
                onChange={(e) =>
                  setProfile({ ...profile, age: parseInt(e.target.value) })
                }
              />
            </div>
            <div className="space-y-2">
              <Select
                onValueChange={(value) =>
                  setProfile({ ...profile, gender: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Input
                placeholder="Native Language"
                value={profile.native_language}
                onChange={(e) =>
                  setProfile({ ...profile, native_language: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Input
                placeholder="Accent"
                value={profile.accent}
                onChange={(e) =>
                  setProfile({ ...profile, accent: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Input
                placeholder="Speaking Impairments (if any)"
                value={profile.speaking_impairments}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    speaking_impairments: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Select
                onValueChange={(value) =>
                  setProfile({ ...profile, recording_environment: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Recording Environment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="quiet_room">Quiet Room</SelectItem>
                  <SelectItem value="office">Office</SelectItem>
                  <SelectItem value="outdoor">Outdoor</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Saving..." : "Save Profile"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
