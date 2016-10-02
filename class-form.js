"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var data_service_1 = require('modules/data-service/data-service');
var ClassForm = (function () {
    function ClassForm(data) {
        this.data = data;
    }
    ClassForm.prototype.ngOnInit = function () {
        this.orientDBClassForm = {
            submit: function (x) { console.log(x); },
            submitLabel: "Save",
            controls: [
                {
                    type: "fieldset",
                    name: "Class Group",
                    fields: [
                        { classField: this.data.orientDBClassSchema[0] },
                        { classField: this.data.orientDBClassSchema[1] },
                        { classField: this.data.orientDBClassSchema[2] },
                        { classField: this.data.orientDBClassSchema[3] },
                        { classField: this.data.orientDBClassSchema[4] },
                        { classField: this.data.orientDBClassSchema[5] }
                    ]
                },
                {
                    type: "fieldset",
                    name: "Class Group",
                    fields: [
                        { classField: this.data.orientDBClassSchema[6] },
                        { classField: this.data.orientDBClassSchema[7] },
                        { classField: this.data.orientDBClassSchema[8] },
                        { classField: this.data.orientDBClassSchema[9] }
                    ]
                },
            ]
        };
        this.orientDBClassFormObject = {
            fieldObject: this.data.orientDBClassSchema,
            formObject: this.orientDBClassForm
        };
    };
    ClassForm = __decorate([
        core_1.Component({
            selector: 'class-form',
            template: "\n\t\t<reactive-form [formObject]=\"orientDBClassFormObject\"></reactive-form>\n\t"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof data_service_1.DataService !== 'undefined' && data_service_1.DataService) === 'function' && _a) || Object])
    ], ClassForm);
    return ClassForm;
    var _a;
}());
exports.ClassForm = ClassForm;
//# sourceMappingURL=class-form.js.map