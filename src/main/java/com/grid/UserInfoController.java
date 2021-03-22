package com.grid;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserInfoController {
	
	@Autowired
	UserInfoList userInfo;
	
	@RequestMapping("/users")
	public List<UserInfo> getUsers() {
		return userInfo.getUsersInfo();
	}
	
	@RequestMapping("/user")
	public List<UserInfo> addUser(@RequestBody UserInfo info) {
		return userInfo.addUserInfo(info);
	}
}
