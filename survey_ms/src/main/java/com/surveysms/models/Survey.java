package com.surveysms.models;

import org.springframework.data.annotation.Id;

public class Survey {
    @Id
    private String id;
    private int document;
    private Boolean question_one;
    private Boolean question_two;
    private Boolean question_three;
    private Boolean question_four;
    private Boolean question_five;

    public Survey(String id,int document, Boolean question_one, Boolean question_two, Boolean question_three, Boolean question_four, Boolean question_five){
        this.id = id;
        this.document = document;
        this.question_one = question_one;
        this.question_two = question_two;
        this.question_three = question_three;
        this.question_four = question_four;
        this.question_five = question_five;
    }
    public String getId() {
        return id;
    }

    public int getdocument() {
        return document;
    }

    public void setdocument(int document) {
        this.document = document;
    }

    public Boolean getQuestion_one() {
        return question_one;
    }

    public void setQuestion_one(Boolean question_one) {
        this.question_one = question_one;
    }

    public Boolean getQuestion_two() {
        return question_two;
    }

    public void setQuestion_two(Boolean question_two) {
        this.question_two = question_two;
    }

    public Boolean getQuestion_three() {
        return question_three;
    }

    public void setQuestion_three(Boolean question_three) {
        this.question_three = question_three;
    }

    public Boolean getQuestion_four() {
        return question_four;
    }

    public void setQuestion_four(Boolean question_four) {
        this.question_four = question_four;
    }

    public Boolean getQuestion_five() {
        return question_five;
    }

    public void setQuestion_five(Boolean question_five) {
        this.question_five = question_five;
    }
}
