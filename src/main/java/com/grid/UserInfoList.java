
package com.grid;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

@SessionScope
@Component
public class UserInfoList {
	
	private List<UserInfo> usersInfo=new ArrayList<UserInfo>();
	
	@PostConstruct
	public void init () {
		for(int i = 0; i <100; i++) {
			UserInfo  info = new UserInfo();
			info.setAge(28);
			info.setEmail("ansajaman@gmail.com");
			info.setName("ansaj");
			info.setPincode(110078);
			usersInfo.add(info);
		}
	}

	public List<UserInfo> getUsersInfo() {
		return usersInfo;
	}
	
	public List<UserInfo> addUserInfo(UserInfo info) {
		usersInfo.add(info);
		return usersInfo;
	}
	
}
