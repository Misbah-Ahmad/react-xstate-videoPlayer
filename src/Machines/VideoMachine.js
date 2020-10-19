export const videoMachine = new Machine({
  id: "videoMachine",
  initial: "loading",
  context: {
    video: null,
    duration: 0,
    elapsed: 0,
  },
  states: {
    loading: {
      on: {
        LODED: "ready",
        FAILED: "failure",
      },
    },
    ready: {
      initial: "paused",
      states: {
        paused: {
          on: {
            PLAY: "playing",
          },
        },
        playing: {
          on: {
            PAUSE: "paused",
            END: "ended",
          },
        },
        ended: {
          on: {
            PLAY: {
              target: "playing",
              actions: assign({ duration: 0 }),
            },
          },
        },
      },
    },
    failure: {
      type: "final",
    },
  },
});
