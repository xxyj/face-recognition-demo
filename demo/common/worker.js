// webworker 不能传递dom元素
importScripts();
window.onmessage = function(e) {
  const faceDetector = new FaceDetector({
    // 速度优先
    fastMode: true,
    // 最大识别
    maxDetectedFaces: 5,
  });
  faceDetector.detect(e.image).then(faces => {
    postMessage(faces);
  });
};
