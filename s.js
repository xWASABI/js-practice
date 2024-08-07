const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');
const prompt = require('prompt');

const git = simpleGit();

function updateDependenciesInRepo(repoPath, dependencies) {
    const packageJsonPath = path.join(repoPath, 'package.json');
    
    if (!fs.existsSync(packageJsonPath)) {
        console.log(`No package.json found in ${repoPath}`);
        return;
    }

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

    Object.keys(dependencies).forEach(dep => {
        if (packageJson.dependencies && packageJson.dependencies[dep]) {
            packageJson.dependencies[dep] = dependencies[dep];
        }
        if (packageJson.devDependencies && packageJson.devDependencies[dep]) {
            packageJson.devDependencies[dep] = dependencies[dep];
        }
    });

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

async function main() {
    prompt.start();

    const schema = {
        properties: {
            repos: {
                description: 'Enter the list of repository URLs (comma-separated)',
                required: true
            },
            branchName: {
                description: 'Enter the branch name for updates',
                required: true
            },
            dependencies: {
                description: 'Enter the dependencies (name@version, comma-separated)',
                required: true
            },
            commitMessage: {
                description: 'Enter the commit message for the updates',
                required: true
            }
        }
    };

    prompt.get(schema, async (err, result) => {
        if (err) {
            console.error('Error:', err);
            return;
        }

        const { repos, branchName, dependencies, commitMessage } = result;
        const repoUrls = repos.split(',').map(url => url.trim());
        const dependencyList = dependencies.split(',').reduce((acc, dep) => {
            const [name, version] = dep.split('@');
            acc[name.trim()] = version.trim();
            return acc;
        }, {});

        for (const repoUrl of repoUrls) {
            const repoName = repoUrl.split('/').pop().replace('.git', '');
            console.log(`Processing repository: ${repoName}`);

            // Clone the repository
            await git.clone(repoUrl);
            process.chdir(repoName);

            // Create and checkout a new branch
            await git.checkoutLocalBranch(branchName);

            // Update dependencies
            updateDependenciesInRepo(process.cwd(), dependencyList);

            // Stage, commit, and push changes
            await git.add('./*');
            await git.commit(commitMessage);
            await git.push('origin', branchName);

            // Create a pull request (GitHub CLI required)
            // Uncomment if GitHub CLI is installed
            // await exec(`gh pr create --title "${commitMessage}" --body "Update dependencies" --base main --head ${branchName}`);

            // Go back to the parent directory
            process.chdir('..');

            console.log(`Updates pushed and pull request created for ${repoName}`);
        }

        console.log('All repositories have been processed.');
    });
}

main();
