package ru.orgunit.backend.entities;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "task", schema = "public")
public class TaskEntity extends AEntity {

    @Basic
    @Column(name = "image")
    private String image;

    @Basic
    @Column(name = "title")
    private String title;

    @Basic
    @Column(name = "text")
    private String text;

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
