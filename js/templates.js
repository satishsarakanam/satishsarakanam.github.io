var templates = {
    skills: function() {

        var vw = Math.max(window.innerWidth || 0, document.documentElement.clientWidth || 0)
        var vh = Math.max(window.innerHeight || 0, document.documentElement.clientHeight || 0)

        vw = !isMobile ? '600px' : vw;
        vh = vh / 2;

        var items_fit = (Math.round(((parseInt(vw) - 32) / 96) - 0.5) * Math.round(((vh - 120) / 86) - 0.7)) - 1;

        var a = '';
        var incrementor = 1;

        try {
            Object.keys(tSkills).forEach(function(key) {
                if (incrementor < items_fit) {
                    a += "<div class='item'>" +
                        "<div class='item_name'>" + tSkills[key].name + "</div>" +
                        "<div class='item_img' style='background-image:url(\"" + tSkills[key].url + "\")');></div>" +
                        "</div>"
                    incrementor += 1;
                } else if (incrementor === items_fit) {
                    a += "<div class='item more'>" +
                        "<div class='item_name'> &gt; </div>" +
                        "<div class='more_dots blinking' data-type='skills'>&hellip;</div>" +
                        "</div>";

                    incrementor += 1;
                } else {
                    throw BreakException;
                }
            });
        } catch (e) {};

        var template = "<div class='skill_templates'>" + a + "</div>"
        return template;
    },

    tools: function() {

        var vw = Math.max(window.innerWidth || 0, document.documentElement.clientWidth || 0)
        var vh = Math.max(window.innerHeight || 0, document.documentElement.clientHeight || 0)

        vw = !isMobile ? '600px' : vw;
        vh = vh / 2;

        var items_fit = (Math.round(((parseInt(vw) - 32) / 96) - 0.5) * Math.round(((vh - 120) / 86) - 0.7));

        var a = '';
        var incrementor = 1;

        try {
            Object.keys(dTools).forEach(function(key) {
                if (incrementor < items_fit) {
                    a += "<div class='item'>" +
                        "<div class='item_name'>" + dTools[key].name + "</div>" +
                        "<div class='item_img' style='background-image:url(\"" + dTools[key].url + "\")');></div>" +
                        "</div>"
                    incrementor += 1;
                } else if (incrementor === items_fit) {
                    a += "<div class='item more'>" +
                        "<div class='item_name'> &gt; </div>" +
                        "<div class='more_dots blinking' data-type='tools'>&hellip;</div>" +
                        "</div>";

                    incrementor += 1;
                } else {
                    throw BreakException;
                }
            });
        } catch (e) {}


        var template = "<div class='skill_templates'>" + a + "</div>"
        return template;

    }

}