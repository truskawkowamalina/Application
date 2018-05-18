package com.app.mountainsapp;



import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ResourceController {

    @GetMapping("/resource")
    public List<Point> resource() {
        List <Point> points= new ArrayList<>();
        points.add(new Point(49.231833,19.981556));
        points.add(new Point(51,22));
        points.add(new Point(54,21));
        points.add(new Point(48,24));

        return points;
    }




}
