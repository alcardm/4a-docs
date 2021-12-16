package com.surveysms.controllers;

import com.surveysms.exceptions.SurveyNotFoundException;
import com.surveysms.models.Survey;
import com.surveysms.repositories.SurveyRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SurveyController {
    private final SurveyRepository surveyRepository;

    public SurveyController(SurveyRepository surveyRepository){
        this.surveyRepository = surveyRepository;
    }
    @PostMapping("/surveys")
    Survey newSurvey(@RequestBody Survey survey){
        if(survey.getQuestion_one() == null){
            throw new SurveyNotFoundException("Fields can't be empty");
        }
        if(survey.getQuestion_two() == null){
            throw new SurveyNotFoundException("Fields can't be empty");
        }
        if(survey.getQuestion_three() == null){
            throw new SurveyNotFoundException("Fields can't be empty");
        }
        if(survey.getQuestion_four() == null){
            throw new SurveyNotFoundException("Fields can't be empty");
        }
        if(survey.getQuestion_five() == null){
            throw new SurveyNotFoundException("Fields can't be empty");
        }
        surveyRepository.save(survey);
        return survey;
    }
    @GetMapping("/surveys/{document}")
    List<Survey> getSurveys(@PathVariable int document){
        List<Survey> surveys = surveyRepository.findSurveysByDocument(document);
        if (surveys == null){
            throw new SurveyNotFoundException("No se encontrarón coincidencias con el documento" + document);
        }
        return surveys;
    }
    @GetMapping("/surveys")
    List<Survey> getAllSurveys(){
        List<Survey> surveys = surveyRepository.findAll();
        if (surveys == null){
            throw new SurveyNotFoundException("No se encontrarón coincidencias");
        }
        return surveys;
    }
    @DeleteMapping("/surveys/{id}")
    String deleteSurvey(@PathVariable String id){
        String surveyDel = surveyRepository.deleteSurveyById(id);
        if (surveyDel == null){
            throw new SurveyNotFoundException("No se encontrarón coincidencias con el id" + id);
        }
        return surveyDel;
    }
}