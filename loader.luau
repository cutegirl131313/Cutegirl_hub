-- CG Loader
-- loadstring(game:HttpGet("https://raw.githubusercontent.com/cutegirl131313/Cutegirl_hub/refs/heads/main/loader.luau"))()

local PAGE = "https://cutegirl131313.github.io/Cutegirl_hub/"

local success, result = pcall(function()
	return game:HttpGet(PAGE)
end)

if not success then
	warn("[CG] Server connection failed")
	return
end

local code = result:match('<script type="text/plain" id="source">%s*(.-)%s*</script>')
if not code or code == "" then
	warn("[CG] Source not found.")
	return
end

local fn, err = loadstring(code)
if not fn then
	warn("[CG] Execution Error: ", err)
	return
end

fn()
