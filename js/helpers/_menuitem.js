/**
 * @fileOverview _menuitem.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._menuitem = function(options){

        var ele = aria.currentSelector.find("menuitem"),
            self = this,
            labeler = {

                init: function(){

                    if( ele.length > 0){
                        this.assignLabels();
                    }

                },

                assignLabels: function(){

                    $.each(ele, function(  ) {

                        var $this = $(this),
                            eleType = $this.prop("type"),
                            role = $this.prop("role");

                            self.keepTrack( $this );

                         if(eleType === "checkbox" && typeof role === "undefined"){
                            $this.attr("role", "menuitemcheckbox");
                         }
                         else if(eleType === "radio" && typeof role === "undefined"){
                            $this.attr("role", "menuitemradio");
                         }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);