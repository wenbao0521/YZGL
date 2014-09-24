package com.zxct.yzbg;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HttpClientToServer {

	//String urlAddress = "http://192.168.0.18:8080/AndroidServer/login.do";
	String urlAddress="http://192.168.0.18:8080/YZBGinterface/AndroidServlet?hid=864219020023223";
	public HttpClientToServer(){
			
		}
		
	
	public String doPost(){
		//String getUrl = urlAddress + "?username="+username+"&password="+password;
		HttpPost httpPost = new HttpPost(urlAddress);
		List params = new ArrayList();
//		NameValuePair pair1 = new BasicNameValuePair("username", username);
//		NameValuePair pair2 = new BasicNameValuePair("password", password);
//		params.add(pair1);
//		params.add(pair2);
		HttpEntity he;
		try {
			he = new UrlEncodedFormEntity(params, "gbk");
			httpPost.setEntity(he);
		} catch (UnsupportedEncodingException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} 
		
		
		HttpClient hc = new DefaultHttpClient();
		try {
			HttpResponse ht = hc.execute(httpPost);
			if(ht.getStatusLine().getStatusCode() == HttpStatus.SC_OK){
				HttpEntity het = ht.getEntity();
				InputStream is = het.getContent();
				BufferedReader br = new BufferedReader(new InputStreamReader(is));
				String response = "";
				String readLine = null;
				while((readLine =br.readLine()) != null){
					//response = br.readLine();
					System.out.println("readLine"+br.readLine());
					response = response + readLine;
				}
				is.close();
				br.close();
				

				
						
						JSONObject	jsonObj = new JSONObject(response);
							System.out.println(jsonObj.getString("jh")+"========="+response);
							System.out.println("jsonObj:"+ jsonObj.length() );
				
				
				
				return jsonObj.getString("jh");
				
			}else{
				return "error";
			}
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "exception";
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "exception";
	}

	
	
	
	
	
	public JSONArray doPostParams(String jh){
		//String getUrl = urlAddress + "?username="+username+"&password="+password;
		String doPostParamsurlAddress="http://192.168.0.18:8080/YZBGinterface/AndroidGetDataDecent?hid=864219020023223&&sqlid=300&appid=11&jh="+jh;
		HttpPost httpPost = new HttpPost(doPostParamsurlAddress);
System.out.println("doPostParams-->"+jh);		
		List params = new ArrayList();
//		NameValuePair pair1 = new BasicNameValuePair("jh", jh);
//		params.add(pair1);
		
		HttpEntity he;
		try {
			he = new UrlEncodedFormEntity(params, "gbk");
			httpPost.setEntity(he);
		} catch (UnsupportedEncodingException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} 
		
		
		HttpClient hc = new DefaultHttpClient();
		try {
			HttpResponse ht = hc.execute(httpPost);
			if(ht.getStatusLine().getStatusCode() == HttpStatus.SC_OK){
				HttpEntity het = ht.getEntity();
				InputStream is = het.getContent();
				BufferedReader br = new BufferedReader(new InputStreamReader(is));
				String response = "";
				String readLine = null;
				while((readLine =br.readLine()) != null){
					response = response + readLine;
				}
				is.close();
				br.close();
				

				JSONArray arr = new JSONArray(response);  
				System.out.println(arr.length()+"arr111");
//				JSONObject jsonObj = (JSONObject) arr.get(0);  
						

				
				return arr;
				
			}else{
				return null;
			}
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}