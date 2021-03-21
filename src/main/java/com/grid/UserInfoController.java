package com.grid;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserInfoController {

	@Autowired
	UserInfo info;
	
	@RequestMapping("/users")
	public List<UserInfo> getUsers() {
		List<UserInfo> userInfo = new ArrayList<UserInfo>();
		for(int i = 0; i <100; i++) {
			info.setAge(28);
			info.setEmail("ansajaman@gmail.com");
			info.setName("ansaj");
			info.setPincode(110078);
			userInfo.add(info);
		}
		return userInfo;
	}
}
