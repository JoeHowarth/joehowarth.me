import BobBotThumbnail from '../assets/BobBotThumbnail.jpg';

export const projects = [
  {
    name: 'GoScanner',
    description: 'Transforms webcam pictures of Go board into digital record of the game. Uses traditional and deep convolutional computer vision to detect and segment board, then classify each position.',
    repo: 'https://github.com/JoeHowarth/Fun_w_TensorFlow',
    img: '',
    site: '',
    technologies: [
      'Python',
      'NumPy',
      'Pandas',
      'OpenCV',
      'Keras',
      'TensorFlow',
    ],
  },
  {
    name: 'TrippyAdvisor',
    subtitle: 'PolyHack 2016 Finalist',
    description: "Generates and plots day trip for any location based on user's input.   Samples surrounding with TrippyAdvisor API, then plots route with Google Maps. API EXPIRED, CURRENTLY NON-FUNCTIONAL",
    repo: 'https://github.com/JoeHowarth/TrippyAdvisor',
    site: 'https://joehowarth.github.io/TrippyAdvisor/',
    technologies: ['Google Maps API', 'TrippyAdvisor API', 'Javascript', 'Jquery']
  },
  {
    name: 'GHLaw',
    description: 'First site for Gallagher & Howarth law firm. Learned the basics of aesthetic css and webhosting',
    repo: 'https://github.com/JoeHowarth/GHLaw',
    img: '',
    site: 'https://joehowarth.github.io/GHLaw/',
    technologies: ['html', 'css',],
  },
  {
    name: 'BobBot',
    description: 'Markov Chain based twitter bot written in Clojure deployed through Heroku. Gained experience with Functional-Programing and immutability. Trained on poems by Edward Lear.',
    repo: 'https://github.com/JoeHowarth/clojure_playground',
    site: 'https://twitter.com/BottieBobBot',
    img: BobBotThumbnail,
    technologies: ['Clojure', 'Twitter-API', 'Heroku', 'Functional-Programing']
  },
  {
    name: 'JSCalc',
    description: 'Basic calculator app written to learn React and as a refresher to javascript.',
    repo: 'https://github.com/JoeHowarth/jscalc',
    site: 'https://joehowarth.github.io/jscalc/',
    img: '',
    technologies: ['React'],
  },
];
