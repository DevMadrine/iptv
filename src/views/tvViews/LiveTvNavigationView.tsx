import { View, For } from "@lightningtv/solid";
import { Column } from "@lightningtv/solid/primitives";
import LiveTvMenu from "@/components/tvComponents/LiveTvMenu";
import { createMemo } from "solid-js";

const REPEAT_COUNT = 50;

type Props = {
  items: () => Array<{
    channelIcon: string;
    channelNumber: string;
  }>;
  onSelect: (index: number) => void;
};

export function LiveTvNavigationView(props: Props) {
  const repeatedItems = createMemo(() => {
    const source = props.items();
    if (!source.length) return [];
    const repeated: Array<{ channelIcon: string; channelNumber: string }> = [];
    for (let i = 0; i < REPEAT_COUNT; i++) {
      for (const item of source) {
        repeated.push(item);
      }
    }
    return repeated;
  });

  const startIndex = createMemo(() => {
    const len = props.items().length;
    if (!len) return 0;
    return Math.floor(REPEAT_COUNT / 2) * len;
  });

  return (
    <View
      style={{
        width: 250,
        height: 500,
        x: 20,
        y: 520,
        borderRadius: 5,
        clipping: true,
      }}
    >
      <Column
        autofocus={true}
        scrollIndex={startIndex()}
        scroll={"always"}
        style={{
          width: 250,
          height: 420,
          display: "flex",
          justifyContent: "flexStart",
          alignItems: "center",
          gap: 10,
        }}
      >
        <For each={repeatedItems()}>
          {(item, index) => (
            <LiveTvMenu
              channelIcon={item.channelIcon}
              channelNumber={item.channelNumber}
              onFocus={() => {
                const realIndex = index() % props.items().length;
                props.onSelect(realIndex);
              }}
            />
          )}
        </For>
      </Column>
    </View>
  );
}
