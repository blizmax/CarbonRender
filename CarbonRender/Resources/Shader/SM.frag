#version 430

layout(location = 0) out vec4 smColor;
layout(location = 1) out vec3 vplColor;

in vec3 wsP;
in vec2 uv;
in float d;

uniform sampler2D albedoMap;

void main ()
{
	vec4 albedo = texture2D(albedoMap, uv);
	albedo.rgb = pow(albedo.rgb, vec3(2.2f));

	smColor = vec4(wsP, d);
	vplColor = albedo.xyz;
}