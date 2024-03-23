# @lephenix47/speech-to-text-utility

## Table of Contents

- [@lephenix47/speech-to-text-utility](#lephenix47speech-to-text-utility)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Usage](#usage)
    - [Importing the Library](#importing-the-library)
    - [Configuring and Starting Speech Recognition](#configuring-and-starting-speech-recognition)
    - [Available Methods and Properties](#available-methods-and-properties)
  - [Conclusion](#conclusion)

## Introduction

Introducing the `@lephenix47/speech-to-text-utility` library, a powerful and flexible solution designed for JavaScript and TypeScript developers looking to integrate speech recognition features into their projects. Built with simplicity and extensibility in mind, this library harnesses the power of the browser's Web Speech API to transcribe real-time audio inputs with ease.

## Usage

### Importing the Library

To begin, you'll need to import the library into your project:

```js
  import { SpeechToText } from '@lephenix47/speech-to-text-utility';
```

### Configuring and Starting Speech Recognition

From here, you can personalize the speech recognition behavior to fit your application's demands. Some notable methods worth mentioning include setting the language, enabling interim results, limiting the number of alternatives, toggling continual recognition, and configuring event callbacks.

Example:

```js
  const speechToText = new SpeechToText();

  speechToText
    .setLanguage('en-US')
    .setInterimResults(true)
    .setMaxAlternatives(5)
    .setContinuous(true)
    .setOnResult((sentence, isFinal) => {
      if (isFinal) {
        console.log(`Received Final Result: "${sentence}"`);
      } else {
        console.log(`Received Intermediate Result: "${sentence}"`);
      }
    });
```

Ready to embark on recognizing speech? Trigger the speech recognition engine with the startRecognition() method.

```js
  speechToText.startRecognition();
```

Should you ever decide to halt the recognition midway, rely on the handy stopRecognition() method.

```js
  speechToText.stopRecognition();
```

### Available Methods and Properties

<details>
  <summary>📖 Table of all the methods and properties</summary>

  <table>
      <tr>
          <td>Method</td>
          <td>Description</td>
          <td>Return Value</td>
      </tr>
      <tr>
          <td>setLanguage(language: string)</td>
          <td>Sets the language for the speech recognition.</td>
          <td>SpeechToText</td>
      </tr>
      <tr>
          <td>setInterimResults(bool: bool)</td>
          <td>Determines if interim results are included in the recognition.</td>
          <td>SpeechToText</td>
      </tr>
      <tr>
          <td>setMaxAlternatives(num: number)</td>
          <td>Limits the number of recognition alternatives offered.</td>
          <td>SpeechToText</td>
      </tr>
      <tr>
          <td>setContinuous(bool: bool)</td>
          <td>Switches on or off the continuous speech recognition mode.</td>
          <td>SpeechToText</td>
      </tr>
      <tr>
          <td>setOnResult(fn: Function)</td>
          <td>Registers a callback function invoked whenever a speech recognition result occurs.</td>
          <td>SpeechToText</td>
      </tr>
      <tr>
          <td>setOnEnd(fn: Function)</td>
          <td>Subscribes to the speech recognition ending event.</td>
          <td>SpeechToText</td>
      </tr>
      <tr>
          <td>setOnError(fn: Function)</td>
          <td>Signs up for the speech recognition error event.</td>
          <td>SpeechToText</td>
      </tr>
      <tr>
          <td>setOnStart(fn: Function)</td>
          <td>Hooks into the speech recognition initialization event.</td>
          <td>SpeechToText</td>
      </tr>
      <tr>
          <td>setOnAudioStart(fn: Function)</td>
          <td>Captures the audio capturing commencement event.</td>
          <td>SpeechToText</td>
      </tr>
      <tr>
          <td>setOnSoundStart(fn: Function)</td>
          <td>Monitors the audio&#39;s sonic occurrences triggering the fn callback.</td>
          <td>SpeechToText</td>
      </tr>
      <tr>
          <td>setOnSoundEnd(fn: Function)</td>
          <td>Observes the conclusion of auditory happenings invoking the fn callback.</td>
          <td>SpeechToText</td>
      </tr>
      <tr>
          <td>setOnSpeechStart(fn: Function)</td>
          <td>Seizes the moment when vocalizations ignite the fn callback.</td>
          <td>SpeechToText</td>
      </tr>
      <tr>
          <td>setOnSpeechEnd(fn: Function)</td>
          <td>Records the culmination of verbal articulations summoning the fn callback.</td>
          <td>SpeechToText</td>
      </tr>
      <tr>
          <td>setOnNoMatch(fn: Function)</td>
          <td>Documents the absence of a match incited by the fn callback.</td>
          <td>SpeechToText</td>
      </tr>
      <tr>
          <td>startRecognition()</td>
          <td>Commences speech recognition processing.</td>
          <td>Promise&lt;void&gt;</td>
      </tr>
      <tr>
          <td>stopRecognition()</td>
          <td>Terminates ongoing speech recognition activity.</td>
          <td>Promise&lt;void&gt;</td>
      </tr>
      <tr>
          <td>get maxAlternatives()</td>
          <td>Retrieves the maximum number of recognition alternatives.</td>
          <td>number</td>
      </tr>
      <tr>
          <td>get continuous()</td>
          <td>Obtains the status of continuous speech recognition.</td>
          <td>boolean</td>
      </tr>
  </table>

</details>

## Conclusion

Integrating speech recognition into your projects has never been simpler, courtesy of the `@lephenix47/speech-to-text-utility` library. Benefit from hassle-free integration, robustness, and extensive customizability today! Should you require any assistance or contribute, head over to GitHub and join the community.

Don't hesitate to leave a star rating or review to express appreciation for this open-source endeavor. Happy coding!
