import { assign, Machine } from "xstate";

export const videoMachine = new Machine(
  {
    id: "videoMachine",
    initial: "loading",
    context: {
      video: null,
      duration: 0,
      elapsed: 0,
      isMute: false,
    },
    states: {
      loading: {
        on: {
          LOADED: {
            target: "success",
            actions: assign({
              video: (_context, event) => event.video,
              duration: (_context, event) => event.video.duration,
            }),
          },
          FAILED: "failure",
        },
      },
      success: {
        type: "parallel",
        states: {
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
                },
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
                    actions: [assign({ elapsed: 0 }), "playVideo"],
                  },
                },
              },
            },
          },
          mic: {
            id: "micState",
            initial: "unmuted",
            states: {
              unmuted: {
                on: {
                  MUTE: {
                    target: "muted",
                    cond: "checkIsUnmuted",
                    actions: [
                      "muteVideo",
                      assign({
                        isMute: true,
                      }),
                    ],
                  },
                },
              },
              muted: {
                on: {
                  UNMUTE: {
                    target: "unmuted",
                    cond: "checkIsMuted",
                    actions: [
                      "unmuteVideo",
                      assign({
                        isMute: false,
                      }),
                    ],
                  },
                },
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
      muteVideo: (context, _event) => (context.video.muted = true),
      unmuteVideo: (context, _event) => (context.video.muted = false),
    },
    guards: {
      checkIsMuted: (context, _event) => context.video.muted === true,
      checkIsUnmuted: (context, _event) => context.video.muted === false,
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
  MUTE: "MUTE",
  UNMUTE: "UNMUTE",
};
