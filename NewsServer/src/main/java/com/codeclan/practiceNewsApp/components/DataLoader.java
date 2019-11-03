package com.codeclan.practiceNewsApp.components;

import com.codeclan.practiceNewsApp.models.Article;
import com.codeclan.practiceNewsApp.models.Journalist;
import com.codeclan.practiceNewsApp.repositories.ArticleRepository;
import com.codeclan.practiceNewsApp.repositories.JournalistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    JournalistRepository journalistRepository;

    @Autowired
    ArticleRepository articleRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

        Journalist maggieMay = new Journalist("Maggie", "May", "01452 333 666");
        journalistRepository.save(maggieMay);

        Article article1 = new Article("03/08/1976", "Woman jumps from planet", "An astronaut's scary day", "Yesterday an astronaut from the Venus mission fell out of the spaceship.  ", maggieMay);
        articleRepository.save(article1);
    }
}
