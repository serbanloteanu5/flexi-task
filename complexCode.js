/*
Filename: complexCode.js
Content: A complex code that implements a machine learning algorithm using TensorFlow.js library for classifying handwritten digits using a convolutional neural network.

Note: This code assumes the availability of the TensorFlow.js library. Make sure to add the <script> tag importing TensorFlow.js in the HTML file before executing this code.
*/

// Importing necessary namespaces from TensorFlow.js
const { data, layers, train, sequential } = tf;

// Defining the architecture of the Convolutional Neural Network
const model = sequential();

// Adding layers to the model
model.add(layers.conv2d({ 
  inputShape: [28, 28, 1],  // Input shape representing the 28x28 grayscale images
  filters: 32,              // Number of filters or kernels
  kernelSize: 3,            // Size of the kernel
  activation: 'relu'        // Activation function
}));
model.add(layers.maxPooling2d({ poolSize: 2 }));  // Applying max pooling
model.add(layers.flatten());                      // Flattening the output
model.add(layers.dense({ units: 10, activation: 'softmax' }));  // Output layer

// Compiling the model
model.compile({
  optimizer: 'adam',        // Optimizer algorithm for model training
  loss: 'categoricalCrossentropy',            // Loss function for model evaluation
  metrics: ['accuracy']     // Metrics to track during model training
});

// Preprocessing the training data
const { xs, ys } = data.mnist.getData();
const xsTensor = tf.tensor4d(xs.reshape([xs.shape[0], 28, 28, 1]));
const ysTensor = tf.oneHot(ys, 10);

// Training the model
const epochs = 10;
const batchSize = 128;
await model.fit(xsTensor, ysTensor, { epochs, batchSize });

// Preprocessing the test data
const { xs: testXs, ys: testYs } = data.mnist.getData(undefined, true);
const testXsTensor = tf.tensor4d(testXs.reshape([testXs.shape[0], 28, 28, 1]));
const testYsTensor = tf.oneHot(testYs, 10);

// Evaluating the model
const evalOutput = model.evaluate(testXsTensor, testYsTensor);
console.log(`Loss: ${evalOutput[0].dataSync()[0]}`);
console.log(`Accuracy: ${evalOutput[1].dataSync()[0]}`);