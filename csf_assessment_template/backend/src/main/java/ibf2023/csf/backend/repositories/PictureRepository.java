package ibf2023.csf.backend.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;


import ibf2023.csf.backend.models.PictureModel;

@Repository
public class PictureRepository {

	private static String dbName = "travelpics";

	@Autowired
	MongoTemplate template;

	// TODO Task 4.2
	// You may change the method signature by adding parameters and/or the return
	// type
	// You may throw any exception
	// TODO IMPORTANT: Write the native mongo query in the comments above this
	// method
	public void save(PictureModel picture) {
		template.save(picture, dbName);
	}

}
