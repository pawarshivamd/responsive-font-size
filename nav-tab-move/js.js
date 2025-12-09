
$(function () {
    let $b = $(".tabs_scroll");
    if (!$b.length) return;

    $b.on("wheel", e => {
        if (e.originalEvent.deltaY) e.preventDefault(), $b.scrollLeft($b.scrollLeft() + e.originalEvent.deltaY);
    });

    function center($t) {
        let b = $b[0].getBoundingClientRect(), t = $t[0].getBoundingClientRect();
        $b.animate({ scrollLeft: $b.scrollLeft() + t.left - b.left - b.width / 2 + t.width / 2 }, 300);
    }

    let $a = $b.find(".nav-link.active"); if ($a.length) center($a);
    $b.find(".nav-link").on("shown.bs.tab", function () { center($(this)) });
});