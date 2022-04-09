# My Very First Website

This was a very fun project and I was able to teach myself a few new things that I could do to further enhance my website

## Goal

The goal of my website was to bring in people trying to pick up guitar and learn 4 simple chords to get them started. In my website 
you can look at a diagram of each chord and listen to how it's supposed to sound. It also has a link to a youtube video with songs 
to learn using those 4 chords.

## What I learned

* How to add and play audio with a `Audio()` tag

```javascript
const audioSample = new Audio("sample_audio.mp3")
    audioSample.play()
```
* How to adjust volume with `.volume`

```javascript
audioSample.volume = 1.0
```

* How to make a background image repeat vertically with `repeat-y`

```css
body{
  background-image: url("sampleImage.png");
  background-repeat: repeat-y;
}
```

