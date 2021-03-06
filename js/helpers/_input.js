/**
 * @fileOverview area.js traverse throught DOM and assign a11y labels.
 *
 * @author Gagandeep Singh <robi_osahan@yahoo.com>
 * @version 1.0.0
 */

(function(window, $, undefined){

    a11y._input = function(scope, options){

        var ele = scope.find("input"),
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
                            role = $this.prop("role"),
                            listAttr = $(this).prop("list"),
                            roleType;

                            self.keepTrack( $this );

                        switch (eleType) {
                            case "button":
                                roleType = "button";
                                break;
                            case "email":
                                roleType = (listAttr) ? "combobox" : "textbox";
                                break;
                            case "image":
                                roleType = "button";
                                break;
                            case "password":
                                roleType = "textbox";
                                break;
                            case "radio":
                                roleType = "radio";
                                break;
                            case "range":
                                roleType = "slider";
                                break;
                            case "reset":
                                roleType = "button";
                                break;
                            case "submit":
                                roleType = "button";
                                break;
                            case "tel":
                                roleType = (listAttr) ? "combobox" : "textbox";
                                break;
                            case "text":
                                roleType = (listAttr) ? "combobox" : "textbox";
                                break;
                            case "search":
                                roleType = (listAttr) ? "combobox" : "textbox";
                                break;
                            case "url":
                                roleType = (listAttr) ? "combobox" : "textbox";
                                break;

                        }

                        $(this).attr("role", roleType);

                    });

                }
            };

        labeler.init();

    };

})(this, jQuery);