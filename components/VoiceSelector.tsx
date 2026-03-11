"use client";

import React from "react";
import { voiceCategories, voiceOptions } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { VoiceSelectorProps } from "@/types";

const VoiceSelector = ({
  value,
  onChange,
  disabled,
  className,
}: VoiceSelectorProps) => {
  return (
    <div className={cn("space-y-5 sm:space-y-6", className)}>
      <RadioGroup
        value={value}
        onValueChange={onChange}
        disabled={disabled}
        className="space-y-6 sm:space-y-8"
      >
        {/* Male Voices */}
        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-xs sm:text-sm font-medium tracking-wide text-[#777] uppercase">
            Male Voices
          </h4>
          <div className="voice-selector-options gap-2 sm:gap-3 lg:gap-4">
            {voiceCategories.male.map((voiceId) => {
              const voice = voiceOptions[voiceId as keyof typeof voiceOptions];
              const isSelected = value === voiceId;
              return (
                <Label
                  key={voiceId}
                  className={cn(
                    "voice-selector-option min-h-14 sm:min-h-16 px-3 py-2 sm:px-4 sm:py-3",
                    isSelected
                      ? "voice-selector-option-selected"
                      : "voice-selector-option-default",
                    disabled && "voice-selector-option-disabled",
                  )}
                >
                  <RadioGroupItem
                    value={voiceId}
                    id={voiceId}
                    className="sr-only"
                  />
                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div
                        className={cn(
                          "w-4 h-4 sm:w-5 sm:h-5 rounded-full border flex items-center justify-center shrink-0",
                          isSelected ? "border-[#663820]" : "border-gray-300",
                        )}
                      >
                        {isSelected && (
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#663820]" />
                        )}
                      </div>
                      <span className="font-bold text-sm sm:text-base text-[#212a3b] leading-tight">
                        {voice.name}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#777] leading-relaxed">
                      {voice.description}
                    </p>
                  </div>
                </Label>
              );
            })}
          </div>
        </div>

        {/* Female Voices */}
        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-xs sm:text-sm font-medium tracking-wide text-[#777] uppercase">
            Female Voices
          </h4>
          <div className="voice-selector-options gap-2 sm:gap-3 lg:gap-4">
            {voiceCategories.female.map((voiceId) => {
              const voice = voiceOptions[voiceId as keyof typeof voiceOptions];
              const isSelected = value === voiceId;
              return (
                <Label
                  key={voiceId}
                  className={cn(
                    "voice-selector-option min-h-14 sm:min-h-16 px-3 py-2 sm:px-4 sm:py-3",
                    isSelected
                      ? "voice-selector-option-selected"
                      : "voice-selector-option-default",
                    disabled && "voice-selector-option-disabled",
                  )}
                >
                  <RadioGroupItem
                    value={voiceId}
                    id={voiceId}
                    className="sr-only"
                  />
                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div
                        className={cn(
                          "w-4 h-4 sm:w-5 sm:h-5 rounded-full border flex items-center justify-center shrink-0",
                          isSelected ? "border-[#663820]" : "border-gray-300",
                        )}
                      >
                        {isSelected && (
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#663820]" />
                        )}
                      </div>
                      <span className="font-bold text-sm sm:text-base text-[#212a3b] leading-tight">
                        {voice.name}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#777] leading-relaxed">
                      {voice.description}
                    </p>
                  </div>
                </Label>
              );
            })}
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default VoiceSelector;
