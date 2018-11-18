package ru.orgunit.backend.entities;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "appliance", schema = "public")
public class ApplianceEntity extends AEntity {

    @Basic
    @Column(name = "title")
    private String title;

    @Basic
    @Column(name = "text")
    private String text;

    @Basic
    @Column(name = "is_active")
    private Integer active;

    @Basic
    @Column(name = "value")
    private Integer value;

    @Basic
    @Column(name = "action")
    private String action;

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

    public Integer getActive() {
        return active;
    }

    public void setActive(Integer active) {
        this.active = active;
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
}
