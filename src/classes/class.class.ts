class SpeechToText {
  /**
   * The `SpeechRecognition` instance used for speech recognition.
   * @private
   * @readonly
   */
  // @ts-ignore
  private readonly recognition: SpeechRecognition;

  /**
   * Creates an instance of `SpeechToText`.
   * @throws {Error} Throws an error if the browser doesn't support speech recognition.
   */
  constructor() {
    /**
     * The `SpeechRecognition` constructor used for speech recognition.
     */
    const SpeechRecognition =
      // @ts-ignore
      window.SpeechRecognition ||
      // @ts-ignore
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      throw new Error(
        "This browser doesn't support the speech recognition, please try using Google Chrome, Microsoft Edge or Safari."
      );
    }

    this.recognition = new SpeechRecognition();
  }

  /**
   * Set whether to include interim results.
   * Interim results are partially recognized speech that is not yet final.
   * Enabling interim results allows you to receive updates as the user speaks.
   *
   * @param {boolean} newBool - Whether to include interim results.
   * @returns {SpeechToText} The current instance of SpeechToText.
   */
  setInterimResults = (newBool: boolean): SpeechToText => {
    this.recognition.interimResults = newBool;

    return this;
  };

  /**
   * Set the language for recognition.
   * @param {string} language - The language code.
   * @returns {SpeechToText} The current instance of SpeechToText.
   */
  setLanguage = (language: string): SpeechToText => {
    this.recognition.lang = language;

    return this;
  };

  /**
   * Set the maximum number of recognition alternatives.
   * @param {number} num - The maximum number of alternatives.
   * @returns {SpeechToText} The current instance of SpeechToText.
   */
  setMaxAlternatives = (num: number): SpeechToText => {
    this.recognition.maxAlternatives = num;

    return this;
  };

  /**
   * Set whether recognition should be continuous.
   * @param {boolean} isContinuous - Whether recognition should be continuous.
   * @returns {SpeechToText} The current instance of SpeechToText.
   */
  setContinuous = (isContinuous: boolean): SpeechToText => {
    this.recognition.continuous = isContinuous;

    return this;
  };

  /**
   * Set the callback function to handle recognition results.
   * @param {(sentence: string, isFinal: boolean) => void} callback - The callback function.
   * @returns {SpeechToText} The current instance of `SpeechToText`.
   */
  setOnResult = (
    callback: (sentence: string, isFinal: boolean) => void
  ): SpeechToText => {
    this.recognition.onresult = (event) => {
      const resultsList: SpeechRecognitionResultList = event.results;

      const result: SpeechRecognitionResult = resultsList[0];

      const alternative: SpeechRecognitionAlternative = result[0];

      const text: string = alternative.transcript;

      callback(text, result.isFinal);
    };

    return this;
  };

  /**
   * Set the callback function to handle recognition end.
   * @param {(e?: Event) => void} callback - The callback function.
   * @returns {SpeechToText} The current instance of SpeechToText.
   */
  setOnEnd = (callback: (e?: Event) => void): SpeechToText => {
    this.recognition.onend = callback;

    return this;
  };

  /**
   * Set the callback function to handle recognition error.
   *
   * @param {(e?: ErrorEvent) => void} callback - The callback function to handle recognition error.
   * @returns {SpeechToText} The current instance of SpeechToText.
   */
  setOnError = (callback: (e?: ErrorEvent) => void): SpeechToText => {
    this.recognition.onerror = callback;

    return this;
  };

  /**
   * Set the callback function to handle speech recognition start.
   * @param {(e?: Event) => void} callback - The callback function to handle speech recognition start.
   * @returns {SpeechToText} The current instance of SpeechToText.
   */
  setOnStart = (callback: (e?: Event) => void): SpeechToText => {
    this.recognition.onstart = callback;
    return this;
  };

  /**
   * Set the callback function to handle the start of audio capture.
   * @param {(e?: Event) => void} callback - The callback function to handle the start of audio capture.
   * @returns {SpeechToText} The current instance of SpeechToText.
   */
  setOnAudioStart = (callback: (e?: Event) => void): SpeechToText => {
    this.recognition.onstart = callback;
    return this;
  };

  /**
   * Set the callback function to handle speech recognition sound start.
   * @param {(e?: Event) => void} callback - The callback function to handle speech recognition sound start.
   * @returns {SpeechToText} The current instance of SpeechToText.
   */
  setOnSoundStart = (callback: (e?: Event) => void): SpeechToText => {
    this.recognition.onsoundstart = callback;
    return this;
  };

  /**
   * Set the callback function to handle speech recognition sound end.
   * @param {(e?: Event) => void} callback - The callback function to handle speech recognition sound end.
   * @returns {SpeechToText} The current instance of SpeechToText.
   */
  setOnSoundEnd = (callback: (e?: Event) => void): SpeechToText => {
    this.recognition.onsoundend = callback;
    return this;
  };

  /**
   * Set the callback function to handle speech recognition speech start.
   * @param {(e?: Event) => void} callback - The callback function to handle speech recognition speech start.
   * @returns {SpeechToText} The current instance of SpeechToText.
   */
  setOnSpeechStart = (callback: (e?: Event) => void): SpeechToText => {
    this.recognition.onspeechstart = callback;
    return this;
  };

  /**
   * Set the callback function to handle speech recognition speech end.
   * @param {(e?: Event) => void} callback - The callback function to handle speech recognition speech end.
   * @returns {SpeechToText} The current instance of SpeechToText.
   */
  setOnSpeechEnd = (callback: (e?: Event) => void): SpeechToText => {
    this.recognition.onspeechend = callback;
    return this;
  };

  /**
   * Set the callback function to handle speech recognition nomatch.
   * @param {(e?: Event) => void} callback - The callback function to handle speech recognition nomatch.
   * @returns {SpeechToText} The current instance of SpeechToText.
   */
  setOnNoMatch = (callback: (e?: Event) => void): SpeechToText => {
    this.recognition.onnomatch = callback;
    return this;
  };

  /**
   * Start speech recognition.
   * @returns {SpeechToText} The current instance of SpeechToText.
   */
  startRecognition = (): SpeechToText => {
    this.recognition.start();

    return this;
  };

  /**
   * Stop speech recognition.
   * @returns {SpeechToText} The current instance of SpeechToText.
   */
  stopRecognition = (): SpeechToText => {
    this.recognition.stop();

    return this;
  };

  /**
   * Get the maximum number of alternatives.
   * @returns {number} The maximum number of alternatives.
   */
  get maxAlternatives(): number {
    return this.recognition.maxAlternatives;
  }

  /**
   * Check if recognition is continuous.
   * @returns {boolean} Whether recognition is continuous.
   */
  get continuous(): boolean {
    return this.recognition.continuous;
  }
}

export default SpeechToText;
