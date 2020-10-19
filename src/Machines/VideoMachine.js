import { assign, Machine } from "xstate";

export const videoMachine = new Machine(
  {
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
          LOADED: {
            target: "ready",
            actions: assign({
              video: (_context, event) => event.video,
              duration: (_context, event) => event.video.duration,
            }),
          },
          FAILED: "failure",
        },
      },
      ready: {
        initial: "paused",
        on: {
          TIMING: {
            actions: assign({
              elapsed: (context, _event) => context.video.currentTime,
            }),
          },          
        },
        states: {
          paused: {
            on: {
              PLAY: {
                target: "playing",
                actions: ["playVideo"],
              },
            }
          },
          playing: {
            on: {
              PAUSE: {
                target: "paused",
                actions: ["pauseVideo"],
              },
              END: "ended",
            },
          },
          ended: {
            on: {
              PLAY: {
                target: "playing",
                actions: [
                  assign({ elapsed: 0 }),
                  "playVideo"
                ],
              },
            },
          },
        },
      },
      failure: {
        type: "final",
      },
    },
  },
  {
    actions: {
      playVideo: (context, _event) => context.video.play(),
      pauseVideo: (context, _event) => context.video.pause(),
    },
  }
);

export const machineEvents = {
  LOADED: "LOADED",
  FAILED: "FAILED",
  PLAY: "PLAY",
  PAUSE: "PAUSE",
  TIMING: "TIMING",
  END: "END",
};
