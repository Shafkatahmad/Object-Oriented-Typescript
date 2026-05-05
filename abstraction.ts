/**
 * abstraction --> idea pai. how it works? doesn't know
 * abstraction can be implemented in 2 ways: 1. interface, 2. abstract class.
 * 1. interface -> implements -> instance
 * 2. abstraction -> extends -> instance
 */

// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// // implementation
// class MusicPlayer implements MediaPlayer {
//   play() {
//     console.log(`Playing Music`);
//   }
//   pause() {
//     console.log(`Music Paused..`);
//   }
//   stop() {
//     console.log(`Music stoped`);
//   }
// }

// const ShafPlayer = new MusicPlayer();
// ShafPlayer.play();

// idea
abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

// implementation
class ShafPlayer extends MediaPlayer {
  play() {
    console.log(`Playing Music`);
  }
  pause() {
    console.log(`Music is Paused`);
  }
  stop() {
    console.log(`Music is stoped`);
  }
}

const shafPlayer = new ShafPlayer();
shafPlayer.play();
