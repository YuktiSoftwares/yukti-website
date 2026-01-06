import $ from "jquery";
import { useEffect } from "react";

export default function AutoSEOPlugin() {
  useEffect(() => {
    $(document).ready(function () {
      let text = window.location.href;
      let title = "";
      let queryIndex = text.indexOf("?");

      if (queryIndex !== -1) {
        title = decodeURIComponent(text.substring(queryIndex + 1));
      }

      let postId = title.trim() !== "" ? btoa(title) : "";

      $.ajax({
        type: "post",
        url: "https://plugins.autoseoplugin.com/update.html/1112224/We-are-one-of-the....",
        data: {
          ekey: "e-AUTOSEOPLUGIN1209830436",
          ekeypass: "x0Xy3yPbFSYq1vVnCC4JJO29HhNjEOxt0FqP",
          postId,
          siteurl: "https://www.yuktisoftware.com/update",
        },
        dataType: "json",
        success: function (response) {
          if (response.status) {
            $("head").prepend(response.head);
            $("body").append(response.body);
          }
        },
      });

      // All your click handlers here
      $(document).on("click", "#dealSave", function () {
        // same code...
      });

      $(document).on("click", "#leadSaveModal", function () {
        // same code...
      });

      $(document).on("keyup", "#dealName", function () {
        $(this).parent().find(".validation").remove();
      });

      // ... continue adding other jQuery listeners
    });
  }, []);

  return (
    <div>
      {/* The plugin will append HTML into <body> automatically */}
      {/* If you want to include some initial HTML, put it here */}
      <div id="plugin-container"></div>
    </div>
  );
}
