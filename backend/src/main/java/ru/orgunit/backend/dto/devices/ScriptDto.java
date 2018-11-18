package ru.orgunit.backend.dto.devices;

import ru.orgunit.backend.entities.ApplianceEntity;
import ru.orgunit.backend.entities.ScriptEntity;

public class ScriptDto {

    private Long id;

    private String image;

    private String title;

    private String text;


    public ScriptDto() {
    }

    public ScriptDto(ScriptEntity entity) {
        id = entity.getId();
        image = entity.getImage();
        title = entity.getTitle();
        text = entity.getText();
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
}
