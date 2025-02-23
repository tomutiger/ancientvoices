import React, { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Mic, Play, Square, Trash2, Upload } from "lucide-react";

interface RecordingInterfaceProps {
  onRecordingComplete?: (blob: Blob) => void;
  isRecording?: boolean;
  hasRecording?: boolean;
}

const RecordingInterface = ({
  onRecordingComplete = () => {},
  isRecording: propIsRecording = false,
  hasRecording: propHasRecording = false,
}: RecordingInterfaceProps) => {
  const [isRecording, setIsRecording] = useState(propIsRecording);
  const [hasRecording, setHasRecording] = useState(propHasRecording);
  const [isPlaying, setIsPlaying] = useState(false);

  // Waveform visualization - using a simple placeholder for now
  const renderWaveform = () => {
    return (
      <div className="h-24 w-full bg-background flex items-center justify-center p-4">
        <div className="flex items-center space-x-1 w-full">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="h-16 w-1 bg-primary/60"
              style={{
                height: `${Math.sin(i * 0.2) * 30 + 40}px`,
                opacity: isRecording ? 1 : 0.5,
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card className="w-full max-w-[800px] p-6 bg-white">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Voice Recording</h3>
          {hasRecording && (
            <Button
              variant="destructive"
              size="sm"
              onClick={() => setHasRecording(false)}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Recording
            </Button>
          )}
        </div>

        {renderWaveform()}

        <div className="flex justify-center space-x-4">
          {!hasRecording ? (
            <Button
              size="lg"
              variant={isRecording ? "destructive" : "default"}
              onClick={() => setIsRecording(!isRecording)}
            >
              {isRecording ? (
                <>
                  <Square className="w-4 h-4 mr-2" />
                  Stop Recording
                </>
              ) : (
                <>
                  <Mic className="w-4 h-4 mr-2" />
                  Start Recording
                </>
              )}
            </Button>
          ) : (
            <>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <Play className="w-4 h-4 mr-2" />
                {isPlaying ? "Stop" : "Play"}
              </Button>
              <Button size="lg">
                <Upload className="w-4 h-4 mr-2" />
                Submit Recording
              </Button>
            </>
          )}
        </div>

        <div className="text-sm text-muted-foreground text-center">
          {isRecording
            ? "Recording in progress..."
            : hasRecording
              ? "Review your recording before submitting"
              : "Click the record button to start"}
        </div>
      </div>
    </Card>
  );
};

export default RecordingInterface;
