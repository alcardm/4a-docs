package com.surveysms.repositories;

import com.surveysms.models.Survey;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface SurveyRepository extends MongoRepository <Survey, String> {
    List<Survey> findSurveysByDocument(int document);
}