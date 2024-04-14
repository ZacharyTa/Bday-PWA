import * as React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

export default function ScrollableSelect({ item, items }) {
  const [value, setValue] = React.useState(undefined);

  return (
    <div className="App">
      <Select.Root value={value} onValueChange={setValue}>
        <Select.Trigger style={{ display: "flex", alignItems: "center" }}>
          <Select.Value placeholder={item} />
          <ChevronDown />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content position={"popper"}>
            <ScrollArea.Root type="auto">
              <Select.Viewport
                asChild
                style={{
                  maxHeight: "100px",
                  marginRight: "10px",
                  background: "#6f6f6f"
                }}
              >
                <ScrollArea.Viewport style={{ overflowY: undefined }}>
                  {items.map((num) => (
                    <Select.Item key={num} value={num.toString()}>
                      <Select.ItemText>{num}</Select.ItemText>
                      <Select.ItemIndicator>
                        <Check />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </ScrollArea.Viewport>
              </Select.Viewport>
              <ScrollArea.Scrollbar
                orientation="vertical"
                style={{
                  width: "5px",
                  backgroundColor: "transparent",
                  padding: "1px"
                }}
              >
                <ScrollArea.Thumb
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#777"
                  }}
                />
              </ScrollArea.Scrollbar>
            </ScrollArea.Root>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
