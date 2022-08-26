import $ from "jquery";
import { useEffect } from "react";
import SkillBar from "react-skillbars";

const TemplateAttribute = (props) => {
  const { moveSet } = props;

  useEffect(() => {
    $(function () {
      var hasBeenTrigged = false;
      $(window).scroll(function () {
        if ($(this).scrollTop() >= 1100 && !hasBeenTrigged) {
          // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
          $(".skillbar-percent").each(function () {
            var $this = $(this);
            $({ Counter: 0 }).animate(
              { Counter: $this.text() },
              {
                duration: 4000,
                easing: "swing",
                step: function () {
                  $this.text(Math.ceil(this.Counter));
                },
              }
            );
          });
          hasBeenTrigged = true;
        }
      });
    });

    $("tr.onclicking").click(function () {
      $("tr.colapsingg").show(600);
      $("tr.onclicking").hide("fast");
    });
    $("span.cross_hide").click(function () {
      $("tr.colapsingg").hide(300);
      $("tr.onclicking").show(200);
    });

    $(".modal-content.confirm_seletion").show();

    $("button.btn_bg_hk.go_marketplace").click(function () {
      $(".modal-open").css("overflow", "overlay");
      $(".modal-backdrop.fade.show").css("display", "none");
    });
  }, []);

  return (
    <div className="char_attributes">
      <div className="d-flex">
        <div className="alpha">
          <img src="/assets/img/m1.png" alt="" />
        </div>
        <div className="alpha width_full">
          <h4 className="d-flex skills_char_number">{moveSet.shortCode}</h4>
          <div className="attr_skills">
            <SkillBar
              skills={[{ type: "", level: moveSet.hitEffect }]}
              level={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TemplateAttribute;
