import "./index.less";

document.addEventListener("DOMContentLoaded", function () {

  // 要显示的文本
  const text = "Hello Welcome To My Blog ^_^";
  const typedTextElement = document.getElementById("typed-text") || {'textContent':''};
  const cursorElement = document.getElementById("cursor");

  let index = 0; // 当前字符的索引
  let isDeleting = false; // 是否正在删除
  const typingSpeed = 150; // 打字速度（单位：毫秒）
  const deletingSpeed = 100; // 删除速度（单位：毫秒）
  const pauseTime = 1000; // 每次删除后等待的时间（单位：毫秒）

  // 打字和删除特效的逻辑
  function typeAndDeleteText() {
    if (!isDeleting && index < text.length) {
      // 正在打字
      typedTextElement.textContent += text.charAt(index); // 添加下一个字符
      index++; // 更新索引
      setTimeout(typeAndDeleteText, typingSpeed); // 设置下一个字符出现的时间
    } else if (isDeleting && index > 0) {
      // 正在删除
      typedTextElement.textContent = text.substring(0, index - 1); // 删除最后一个字符
      index--; // 更新索引
      setTimeout(typeAndDeleteText, deletingSpeed); // 设置下一个字符删除的时间
    } else if (index === text.length) {
      // 完成打字，等待一段时间后开始删除
      isDeleting = true; // 开始删除
      setTimeout(typeAndDeleteText, pauseTime); // 等待一段时间后开始删除
    } else if (index === 0 && isDeleting) {
      // 完成删除后，等待一段时间然后重新打字
      isDeleting = false; // 重新开始打字
      setTimeout(typeAndDeleteText, pauseTime); // 等待一段时间后开始打字
    }
  }

  // 启动特效
  typeAndDeleteText();

  setTimeout(() => {
    document.querySelector(".slogan")?.classList.add("fin");
  }, 250);
});
