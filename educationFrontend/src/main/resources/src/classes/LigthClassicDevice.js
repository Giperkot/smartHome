/**
 * Created by Odohar on 18.08.2018.
 */

import Device from "./Device";
import {getHttpPromise} from "../api";
import {projectConsts} from "../const";
import {updateAppliances} from "../index";
// import {temperatureClassicTemplateFunc} from "../const";

let temperatureClassicTemplateFunc = null;

class LigthClassicDevice extends Device {

    constructor (config) {
        super(config);

        // Инициализация.
        this.light = config.value;
        this.active = config.active;
        this.id = config.id;

        this.droppable = false;
        this.circlePicker = null;
        this.circlePickerParent = null;
        this.needUpdate = false;
    }

    onMouseDown (evt) {
        this.droppable = true;
    }

    onMouseMove (evt) {
        if (!this.droppable) {
            return;
        }

        let parentGeometry = this.circlePickerParent.getBoundingClientRect();
        let leftOffset = evt.pageX - parentGeometry.left - 30;

        leftOffset = Math.max(0, leftOffset);
        leftOffset = Math.min(parentGeometry.width - 60, leftOffset);

        this.circlePicker.style.marginLeft = leftOffset + "px";
    }

    onMouseUp (evt) {
        let self = this;
        if (!self.droppable) {
            return;
        }

        let parentGeometry = this.circlePickerParent.getBoundingClientRect();
        let leftOffset = evt.pageX - parentGeometry.left - 30;
        let finalPosition;
        let currentLight;

        if (leftOffset < parentGeometry.width - 60 - leftOffset) {
            finalPosition = 0;
            currentLight = 0;
        } else {
            finalPosition = parentGeometry.width - 60;
            currentLight = 1;
        }
        this.circlePicker.style.transition = "0.5s all";
        this.circlePicker.style.marginLeft = finalPosition + "px";

        if (currentLight !== self.active) {
            // Нужно послать запрос на сервер

            let config = {
                method: "POST",
                url: projectConsts.url + "/api/public/setValueToAppliance",
                contentType: "application/json",
                jsonData: {
                    id: self.id,
                    active: currentLight
                }
            };

            getHttpPromise(config).then(function (response) {
                let data = JSON.parse(response);
                self.actionsAfterUpdate (data);
            });
        }

        setTimeout(function () {
            self.circlePicker.style.transition = "none";
        }, 500);


        this.droppable = false;
    }

    handleDragAndDrop () {
        let self = this;

        this.circlePicker.addEventListener("mousedown", function (evt) {
            self.onMouseDown.call(self, evt);
        });
        document.addEventListener("mousemove", function (evt) {
            self.onMouseMove.call(self, evt);
        });
        document.addEventListener("mouseup", function (evt) {
            self.onMouseUp.call(self, evt);
        });
    }

    /**
     * Вызывается после Отправки запрсоа на сервер.
     */
    actionsAfterUpdate (data) {
        this.title = data.title;
        this.text = data.text;
        this.temperature = data.temperature;
        this.image = data.image;
        this.active = data.active;

        this.needUpdate = true;
        this.openForm(null);
    }

    onClose () {
        if (this.needUpdate) {
            let config = {
                method: "GET",
                url: projectConsts.url + "/api/public/getAppliencesInfo",
                contentType: "application/json"
            };

            getHttpPromise(config).then(function (response) {
                // Запрос на обновление
                let data = JSON.parse(response);

                updateAppliances(data);
            });

            this.needUpdate = false;
        }
    }

    openForm(targetElm) {
        let self = this;

        let poppForm = document.querySelector(".popup_form");

            super.openForm(poppForm, targetElm, {
                element: this.circlePicker,
                onMouseDown: this.onMouseDown,
                onMouseMove: this.onMouseMove,
                onMouseUp: this.onMouseUp
            });



        if (!temperatureClassicTemplateFunc) {
            let template = document.getElementById("light_classic_template");
            temperatureClassicTemplateFunc = _.template(template.innerHTML);
        }

        poppForm.innerHTML = temperatureClassicTemplateFunc({
            data: {
                title: this.title,
                text: this.text,
                temperature: this.temperature,
                image: this.image
            }
        });

        this.circlePicker = poppForm.querySelector(".circle_picker");
        this.circlePickerParent = this.circlePicker.parentNode;

        // Установка значения при рендере
        let finalPosition = "0px";
        if (this.active) {
            let parentGeometry = this.circlePickerParent.getBoundingClientRect();
            finalPosition = "calc(100% - 60px)";
        }

        if (self.withAnimation) {
            setTimeout(function () {
                self.circlePicker.style.transition = "0.2s all";
                self.circlePicker.style.marginLeft = finalPosition;

                setTimeout(function () {
                    self.circlePicker.style.transition = "none";
                }, 200)
            }, 400);
        } else {
            self.circlePicker.style.marginLeft = finalPosition;
        }

        this.handleDragAndDrop();
    }

}

export default LigthClassicDevice;