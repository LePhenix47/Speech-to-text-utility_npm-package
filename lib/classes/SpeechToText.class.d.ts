/**
 * Class representing a Speech to Text Utility for performing speech recognition operations.
 *
 * @example
 * import { SpeechToText } from '@lephenix47/speech-to-text-utility';
 *
 * const speechToText = new SpeechToText();
 * speechToText
 *   .setLanguage('en-US')
 *   .setInterimResults(true)
 *   .setMaxAlternatives(5)
 *   .setContinuous(true)
 *   .setOnResult((sentence: string, isFinal: boolean) => {
 *     if (isFinal) {
 *       console.log(`Received Final Result: "${sentence}"`);
 *     } else {
 *       console.log(`Received Intermediate Result: "${sentence}"`);
 *     }
 *   })
 *   .startRecognition();
 */
declare class SpeechToText {
    /**
     * The `SpeechRecognition` instance used for speech recognition.
     * @private
     * @readonly
     */
    private readonly recognition;
    /**
     * Creates an instance of `SpeechToText`.
     * @throws {Error} Throws an error if the browser doesn't support speech recognition.
     */
    constructor();
    /**
     * Set whether to include interim results.
     * Interim results are partially recognized speech that is not yet final.
     * Enabling interim results allows you to receive updates as the user speaks.
     *
     * @param {boolean} newBool - Whether to include interim results.
     * @returns {SpeechToText} The current instance of SpeechToText.
     */
    setInterimResults: (newBool: boolean) => SpeechToText;
    /**
     * Set the language for recognition.
     * @param {string} language - The language code.
     * @returns {SpeechToText} The current instance of SpeechToText.
     */
    setLanguage: (language: string) => SpeechToText;
    /**
     * Set the maximum number of recognition alternatives.
     * @param {number} num - The maximum number of alternatives.
     * @returns {SpeechToText} The current instance of SpeechToText.
     */
    setMaxAlternatives: (num: number) => SpeechToText;
    /**
     * Set whether recognition should be continuous.
     * @param {boolean} isContinuous - Whether recognition should be continuous.
     * @returns {SpeechToText} The current instance of SpeechToText.
     */
    setContinuous: (isContinuous: boolean) => SpeechToText;
    /**
     * Set the callback function to handle recognition results.
     * @param {(sentence: string, isFinal: boolean) => void} callback - The callback function.
     * @returns {SpeechToText} The current instance of `SpeechToText`.
     */
    setOnResult: (callback: (sentence: string, isFinal: boolean) => void) => SpeechToText;
    /**
     * Set the callback function to handle recognition end.
     * @param {(e?: Event) => void} callback - The callback function.
     * @returns {SpeechToText} The current instance of SpeechToText.
     */
    setOnEnd: (callback: (e?: Event) => void) => SpeechToText;
    /**
     * Set the callback function to handle recognition error.
     *
     * @param {(e?: ErrorEvent) => void} callback - The callback function to handle recognition error.
     * @returns {SpeechToText} The current instance of SpeechToText.
     */
    setOnError: (callback: (e?: ErrorEvent) => void) => SpeechToText;
    /**
     * Set the callback function to handle speech recognition start.
     * @param {(e?: Event) => void} callback - The callback function to handle speech recognition start.
     * @returns {SpeechToText} The current instance of SpeechToText.
     */
    setOnStart: (callback: (e?: Event) => void) => SpeechToText;
    /**
     * Set the callback function to handle the start of audio capture.
     * @param {(e?: Event) => void} callback - The callback function to handle the start of audio capture.
     * @returns {SpeechToText} The current instance of SpeechToText.
     */
    setOnAudioStart: (callback: (e?: Event) => void) => SpeechToText;
    /**
     * Set the callback function to handle speech recognition sound start.
     * @param {(e?: Event) => void} callback - The callback function to handle speech recognition sound start.
     * @returns {SpeechToText} The current instance of SpeechToText.
     */
    setOnSoundStart: (callback: (e?: Event) => void) => SpeechToText;
    /**
     * Set the callback function to handle speech recognition sound end.
     * @param {(e?: Event) => void} callback - The callback function to handle speech recognition sound end.
     * @returns {SpeechToText} The current instance of SpeechToText.
     */
    setOnSoundEnd: (callback: (e?: Event) => void) => SpeechToText;
    /**
     * Set the callback function to handle speech recognition speech start.
     * @param {(e?: Event) => void} callback - The callback function to handle speech recognition speech start.
     * @returns {SpeechToText} The current instance of SpeechToText.
     */
    setOnSpeechStart: (callback: (e?: Event) => void) => SpeechToText;
    /**
     * Set the callback function to handle speech recognition speech end.
     * @param {(e?: Event) => void} callback - The callback function to handle speech recognition speech end.
     * @returns {SpeechToText} The current instance of SpeechToText.
     */
    setOnSpeechEnd: (callback: (e?: Event) => void) => SpeechToText;
    /**
     * Set the callback function to handle speech recognition nomatch.
     * @param {(e?: Event) => void} callback - The callback function to handle speech recognition nomatch.
     * @returns {SpeechToText} The current instance of SpeechToText.
     */
    setOnNoMatch: (callback: (e?: Event) => void) => SpeechToText;
    /**
     * Start speech recognition.
     * @returns {SpeechToText} The current instance of SpeechToText.
     */
    startRecognition: () => SpeechToText;
    /**
     * Stop speech recognition.
     * @returns {SpeechToText} The current instance of SpeechToText.
     */
    stopRecognition: () => SpeechToText;
    /**
     * Get the maximum number of alternatives.
     * @returns {number} The maximum number of alternatives.
     */
    get maxAlternatives(): number;
    /**
     * Check if recognition is continuous.
     * @returns {boolean} Whether recognition is continuous.
     */
    get continuous(): boolean;
}
export default SpeechToText;
