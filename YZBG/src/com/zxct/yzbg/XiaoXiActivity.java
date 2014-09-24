package com.zxct.yzbg;

import org.apache.cordova.DroidGap;

import android.content.Intent;
import android.os.Bundle;

public class XiaoXiActivity extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		Intent intent = this.getIntent();
//		String title=intent.getStringExtra("title");
		
		super.loadUrl("file:///android_asset/www/workflow/SPLieBiao.html");
		//super.loadUrl("file:///android_asset/www/xiaoxi.html?title="+title);
			
		
	}

}

