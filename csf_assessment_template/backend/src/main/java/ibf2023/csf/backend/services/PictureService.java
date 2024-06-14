package ibf2023.csf.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import ibf2023.csf.backend.repositories.ImageRepository;

@Service
public class PictureService {

	@Autowired
	ImageRepository s3repo;
	// TODO Task 5.1
	// You may change the method signature by adding parameters and/or the return type
	// You may throw any exception 
	public void save(MultipartFile file) {
		s3repo.save(file);
	}
}
