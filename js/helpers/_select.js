/**
 * @fileOverview _select.js traverse throught DOM and assign ARIA labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    aria._select = function(scope, options){

        var ele = aria.currentSelector.find("select"),
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
                            role = $this.prop("role"),
                            multiple = $this.prop("multiple");

                            self.keepTrack( $this );

                         if(multiple && typeof role === "undefined"){
                            $this.attr("role", "listbox");
                            $this.attr("aria-multiselectable","true");
                         } 
                         else if(!multiple && typeof role === "undefined"){
                            $this.attr("role", "listbox");
                            $this.attr("aria-multiselectable","false");
                         } 

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);