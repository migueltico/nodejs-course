require("jsreport").render({
  template: {
      content: "<h1>Hello world</h1>",
      phantom: {
          header: "<p>some header</p>",
          orientation: "landscape",
          width: "300px"
      }
  },
});
