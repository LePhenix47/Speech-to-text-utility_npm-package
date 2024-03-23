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
var SpeechToText = /** @class */ (function () {
    /**
     * Creates an instance of `SpeechToText`.
     * @throws {Error} Throws an error if the browser doesn't support speech recognition.
     */
    function SpeechToText() {
        var _this = this;
        /**
         * Set whether to include interim results.
         * Interim results are partially recognized speech that is not yet final.
         * Enabling interim results allows you to receive updates as the user speaks.
         *
         * @param {boolean} newBool - Whether to include interim results.
         * @returns {SpeechToText} The current instance of SpeechToText.
         */
        this.setInterimResults = function (newBool) {
            _this.recognition.interimResults = newBool;
            return _this;
        };
        /**
         * Set the language for recognition.
         * @param {string} language - The language code.
         * @returns {SpeechToText} The current instance of SpeechToText.
         */
        this.setLanguage = function (language) {
            _this.recognition.lang = language;
            return _this;
        };
        /**
         * Set the maximum number of recognition alternatives.
         * @param {number} num - The maximum number of alternatives.
         * @returns {SpeechToText} The current instance of SpeechToText.
         */
        this.setMaxAlternatives = function (num) {
            _this.recognition.maxAlternatives = num;
            return _this;
        };
        /**
         * Set whether recognition should be continuous.
         * @param {boolean} isContinuous - Whether recognition should be continuous.
         * @returns {SpeechToText} The current instance of SpeechToText.
         */
        this.setContinuous = function (isContinuous) {
            _this.recognition.continuous = isContinuous;
            return _this;
        };
        /**
         * Set the callback function to handle recognition results.
         * @param {(sentence: string, isFinal: boolean) => void} callback - The callback function.
         * @returns {SpeechToText} The current instance of `SpeechToText`.
         */
        this.setOnResult = function (callback) {
            _this.recognition.onresult = function (event) {
                var resultsList = event.results;
                var result = resultsList[0];
                var alternative = result[0];
                var text = alternative.transcript;
                callback(text, result.isFinal);
            };
            return _this;
        };
        /**
         * Set the callback function to handle recognition end.
         * @param {(e?: Event) => void} callback - The callback function.
         * @returns {SpeechToText} The current instance of SpeechToText.
         */
        this.setOnEnd = function (callback) {
            _this.recognition.onend = callback;
            return _this;
        };
        /**
         * Set the callback function to handle recognition error.
         *
         * @param {(e?: ErrorEvent) => void} callback - The callback function to handle recognition error.
         * @returns {SpeechToText} The current instance of SpeechToText.
         */
        this.setOnError = function (callback) {
            _this.recognition.onerror = callback;
            return _this;
        };
        /**
         * Set the callback function to handle speech recognition start.
         * @param {(e?: Event) => void} callback - The callback function to handle speech recognition start.
         * @returns {SpeechToText} The current instance of SpeechToText.
         */
        this.setOnStart = function (callback) {
            _this.recognition.onstart = callback;
            return _this;
        };
        /**
         * Set the callback function to handle the start of audio capture.
         * @param {(e?: Event) => void} callback - The callback function to handle the start of audio capture.
         * @returns {SpeechToText} The current instance of SpeechToText.
         */
        this.setOnAudioStart = function (callback) {
            _this.recognition.onstart = callback;
            return _this;
        };
        /**
         * Set the callback function to handle speech recognition sound start.
         * @param {(e?: Event) => void} callback - The callback function to handle speech recognition sound start.
         * @returns {SpeechToText} The current instance of SpeechToText.
         */
        this.setOnSoundStart = function (callback) {
            _this.recognition.onsoundstart = callback;
            return _this;
        };
        /**
         * Set the callback function to handle speech recognition sound end.
         * @param {(e?: Event) => void} callback - The callback function to handle speech recognition sound end.
         * @returns {SpeechToText} The current instance of SpeechToText.
         */
        this.setOnSoundEnd = function (callback) {
            _this.recognition.onsoundend = callback;
            return _this;
        };
        /**
         * Set the callback function to handle speech recognition speech start.
         * @param {(e?: Event) => void} callback - The callback function to handle speech recognition speech start.
         * @returns {SpeechToText} The current instance of SpeechToText.
         */
        this.setOnSpeechStart = function (callback) {
            _this.recognition.onspeechstart = callback;
            return _this;
        };
        /**
         * Set the callback function to handle speech recognition speech end.
         * @param {(e?: Event) => void} callback - The callback function to handle speech recognition speech end.
         * @returns {SpeechToText} The current instance of SpeechToText.
         */
        this.setOnSpeechEnd = function (callback) {
            _this.recognition.onspeechend = callback;
            return _this;
        };
        /**
         * Set the callback function to handle speech recognition nomatch.
         * @param {(e?: Event) => void} callback - The callback function to handle speech recognition nomatch.
         * @returns {SpeechToText} The current instance of SpeechToText.
         */
        this.setOnNoMatch = function (callback) {
            _this.recognition.onnomatch = callback;
            return _this;
        };
        /**
         * Start speech recognition.
         * @returns {SpeechToText} The current instance of SpeechToText.
         */
        this.startRecognition = function () {
            _this.recognition.start();
            return _this;
        };
        /**
         * Stop speech recognition.
         * @returns {SpeechToText} The current instance of SpeechToText.
         */
        this.stopRecognition = function () {
            _this.recognition.stop();
            return _this;
        };
        /**
         * The `SpeechRecognition` constructor used for speech recognition.
         */
        var SpeechRecognition = 
        // @ts-ignore
        window.SpeechRecognition ||
            // @ts-ignore
            window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            throw new Error("This browser doesn't support the speech recognition, please try using Google Chrome, Microsoft Edge or Safari.");
        }
        this.recognition = new SpeechRecognition();
    }
    Object.defineProperty(SpeechToText.prototype, "maxAlternatives", {
        /**
         * Get the maximum number of alternatives.
         * @returns {number} The maximum number of alternatives.
         */
        get: function () {
            return this.recognition.maxAlternatives;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpeechToText.prototype, "continuous", {
        /**
         * Check if recognition is continuous.
         * @returns {boolean} Whether recognition is continuous.
         */
        get: function () {
            return this.recognition.continuous;
        },
        enumerable: false,
        configurable: true
    });
    return SpeechToText;
}());
export default SpeechToText;
