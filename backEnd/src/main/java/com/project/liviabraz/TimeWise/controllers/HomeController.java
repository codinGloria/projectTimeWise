package com.project.liviabraz.TimeWise.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller 
public class HomeController {

    @GetMapping("/")
    public String index(){
        return "home/index";
    }

}