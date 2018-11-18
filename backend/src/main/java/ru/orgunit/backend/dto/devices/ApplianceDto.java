package ru.orgunit.backend.dto.devices;

import ru.orgunit.backend.entities.ApplianceEntity;
import ru.orgunit.backend.enums.EApplianceImage;

import javax.persistence.Basic;
import javax.persistence.Column;

public class ApplianceDto {

    private Long id;

    private String image;

    private String title;

    private String text;

    private Integer active;

    private Integer value;

    private String action;

    public ApplianceDto() {
    }

    public ApplianceDto(ApplianceEntity entity) {
        id = entity.getId();
        image = EApplianceImage.getImageTypeByApplianceAndValue(entity.getAction(), entity.getActive()).getImageType();
        title = entity.getTitle();
        text = entity.getText();
        value = entity.getValue();
        action = entity.getAction();
        active = entity.getActive();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public Integer getActive() {
        return active;
    }

    public void setActive(Integer active) {
        this.active = active;
    }
}
