/**
 * @fileOverview _option.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._option = function(scope, options){

        var ele = scope.find("option"),
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
                            select = $this.closest('select'),
                            datalist = $this.closest('datalist');

                            self.keepTrack( $this );

                        if( ( select.length > 0 || datalist.length > 0 ) && typeof role === "undefined"){

                            $this.attr("role", "option");

                        }

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);