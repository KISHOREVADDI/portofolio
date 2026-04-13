import { Component, ElementRef, ViewChild, AfterViewChecked, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimateOnScrollDirective } from '../shared/animate-on-scroll.directive';

interface CommandItem {
  command: string;
  output: string[];
}

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule, AnimateOnScrollDirective],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css'
})
export class TerminalComponent implements AfterViewChecked, OnInit {
  @ViewChild('terminalBody') private terminalBody!: ElementRef;
  @ViewChild('terminalInput') private terminalInput!: ElementRef;

  currentInput: string = '';
  commandHistory: CommandItem[] = [];
  pastCommands: string[] = [];
  historyIndex: number = -1;
  isFocused: boolean = true;

  asciiArt: string = `  _  ___     _                    
 | |/ (_)___| |__   ___  _ __ ___ 
 | ' /| / __| '_ \\ / _ \\| '__/ _ \\
 | . \\| \\__ \\ | | | (_) | | |  __/
 |_|\\_\\_|___/_| |_|\\___/|_|  \\___|`;

  commands: { [key: string]: string[] } = {
    'help': [
      'Available commands:',
      '  <span class="cmd-name">whoami</span>     — Who is ...?',
      '  <span class="cmd-name">skills</span>     — Tech stack',
      '  <span class="cmd-name">projects</span>   — My projects',
      '  <span class="cmd-name">contact</span>    — Get in touch',
      '  <span class="cmd-name">education</span>  — Academic details',
      '  <span class="cmd-name">experience</span> — Work experience',
      '  <span class="cmd-name">clear</span>      — Clear terminal',
    ],
    'whoami': [
      'Hi, I am <strong>Vaddi Kishore</strong>.',
      'A passionate Full Stack developer building modern applications.',
      'Specializing in Cybersecurity and secure backend development.',
    ],
    'skills': [
      '<span class="cmd-name">Frontend:</span>  Angular, React, HTML5, CSS3',
      '<span class="cmd-name">Backend:</span>   Java, Spring Boot, Node.js',
      '<span class="cmd-name">Database:</span>  MySQL, MongoDB, Firebase',
      '<span class="cmd-name">Tools:</span>     Git, Postman, Docker, Kali Linux',
    ],
    'projects': [
      '1. <strong>Mini E-Commerce Platform</strong>  — Angular + Spring Boot + MySQL',
      '2. <strong>Hybrid File Transfer</strong>       — Secure file transfer w/ CyberSecurity',
      '3. <strong>Portfolio Website</strong>          — Angular + Email.js + Vercel',
    ],
    'contact': [
      'Email:    <a href="mailto:kishorevaddi1204@gmail.com" class="terminal-link">kishorevaddi1204@gmail.com</a>',
      'GitHub:   <a href="https://github.com/KISHOREVADDI" target="_blank" class="terminal-link">github.com/KISHOREVADDI</a>',
      'LinkedIn: <a href="https://linkedin.com/in/kishorevaddi" target="_blank" class="terminal-link">linkedin.com/in/kishorevaddi</a>',
    ],
    'education': [
      '<strong>B.Tech in Computer Science 2023-2027 </strong>',
      'Godavari Institute Of Engineering and Technology (GIET)',
      'Specialization: Cybersecurity',
    ],
    'experience': [
      '<strong>Full Stack Web Developer</strong>',
      '— Building and maintaining modern web applications',
      '— Implementing responsive UI and backend REST APIs',
      '— Passionate about crafting user-centric experiences',
    ],
  };

  ngOnInit() { }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  executeCommand() {
    const cmd = this.currentInput.trim();
    if (!cmd) return;

    if (cmd.toLowerCase() === 'clear') {
      this.commandHistory = [];
      this.currentInput = '';
      this.pastCommands.push(cmd);
      this.historyIndex = this.pastCommands.length;
      return;
    }

    const output = this.processCommand(cmd);
    this.commandHistory.push({ command: cmd, output });
    this.pastCommands.push(cmd);
    this.historyIndex = this.pastCommands.length;
    this.currentInput = '';
  }

  processCommand(cmd: string): string[] {
    const lowerCmd = cmd.toLowerCase();
    if (this.commands[lowerCmd]) {
      return this.commands[lowerCmd];
    }
    return [
      `<span class="cmd-err">Command not found: ${cmd}</span>`,
      `Type <span class="cmd-name">'help'</span> to see available commands.`,
    ];
  }

  navigateHistory(direction: 'up' | 'down', event: Event) {
    event.preventDefault();
    if (this.pastCommands.length === 0) return;

    if (direction === 'up') {
      if (this.historyIndex > 0) {
        this.historyIndex--;
        this.currentInput = this.pastCommands[this.historyIndex];
      }
    } else {
      if (this.historyIndex < this.pastCommands.length - 1) {
        this.historyIndex++;
        this.currentInput = this.pastCommands[this.historyIndex];
      } else {
        this.historyIndex = this.pastCommands.length;
        this.currentInput = '';
      }
    }
  }

  focusInput() {
    if (this.terminalInput) {
      this.terminalInput.nativeElement.focus();
    }
  }

  private scrollToBottom() {
    try {
      this.terminalBody.nativeElement.scrollTop = this.terminalBody.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
